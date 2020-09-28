package com.fnp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.export.json.SlingModelFilter;
import com.fnp.core.models.Hero;
import com.fnp.core.uilts.SlingModelsUtil;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.factory.ModelFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {Hero.class,
    ComponentExporter.class}, resourceType = HeroImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeroImpl implements Hero {

  @SlingObject
  protected Resource resource;

  @OSGiService
  private ModelFactory modelFactory;

  @Self
  private SlingHttpServletRequest request;

  @OSGiService
  private SlingModelFilter slingModelFilter;

  private Map<String, ComponentExporter> childModels = null;

  private static final Logger LOGGER = LoggerFactory.getLogger(HeroImpl.class);
  static final String RESOURCE_TYPE = "fnp/components/hero";

  @Override
  public String getExportedType() {
    return HeroImpl.RESOURCE_TYPE;
  }

  @Override
  public List<Map> getImageDetails() {
    List<Map> iconDetails = new ArrayList<>();
    if (null != resource) {
      Resource itemResource = resource.getChild("multi");
      if (itemResource != null && itemResource.hasChildren()) {
        for (Resource childResource : itemResource.getChildren()) {
          ValueMap valueMap = childResource.getValueMap();
          Map<String, String> iconMap = new HashMap<>();
          iconMap.put("imagePath", valueMap.get("fileReference", String.class));
          iconMap.put("altText", valueMap.get("altText", String.class));
          iconDetails.add(iconMap);
        }
      }
    }
    return iconDetails;
  }

  @Override
  public Map<String, ComponentExporter> getExportedItems() {
    if (this.childModels == null) {
      this.childModels = SlingModelsUtil
          .getChildModels(this.request, this.slingModelFilter, this.modelFactory);
    }

    return this.childModels;
  }

  @Override
  public String[] getExportedItemsOrder() {
    Map<String, ComponentExporter> models = this.getExportedItems();
    return models.keySet().toArray(ArrayUtils.EMPTY_STRING_ARRAY);
  }
}
